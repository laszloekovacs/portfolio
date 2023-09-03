# build on faster platform
FROM --platform=linux/amd64 node:20-alpine as builder

# set working directory
WORKDIR /build

# copy files
COPY . /build

# install dependencies and build
RUN npm install && npm run build


# create a new image for arm64
# FROM --platform=linux/arm64 nginx:alpine:latest
FROM nginx:alpine3.18
# copy files from build image
COPY --from=builder /build/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80