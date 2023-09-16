FROM node:alpine AS builder

ENV NODE_ENV production

WORKDIR /dbts-ovrflo_v2-F

COPY . /dbts-ovrflo_v2-F

RUN npm install
RUN npm run build


FROM nginx

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=builder /dbts-ovrflo_v2-F/build /usr/share/nginx/html
