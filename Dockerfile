FROM node:16.15.1 as builder

# by only copying package.json, before running npm install. We can leverage dockers caching strategy for steps. Otherwise docker needs to run npm install every time you change any of the code.
COPY package.json ./
RUN yarn install
RUN mkdir /chat-ui
RUN mv ./node_modules ./chat-ui
WORKDIR /chat-ui
COPY . .
# in this step the static React files are created. For more info see package.json
RUN yarn build

FROM nginx:alpine

# copy the .conf template
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page and replace it with the static files we created in the first step
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /chat-ui/build /usr/share/nginx/html
EXPOSE 80

CMD nginx -g 'daemon off;'