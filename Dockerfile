# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

# oven/bun not working with bun install "error: zlib.BrotliDecompress is not implemented" https://github.com/oven-sh/bun/issues/5990#issuecomment-1738422089
FROM node:lts-bullseye-slim

RUN apt-get -y update \
  && apt-get -y install curl \
  && apt-get -y install unzip \
  && rm -rf /var/lib/apt/lists/*
# Run the application as a non-root user and copy files
USER node 

# RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr bash
RUN curl -fsSL https://bun.sh/install | bash

WORKDIR /home/bun/frontend

# Use production node environment by default.
ENV NODE_ENV production

# Copy the rest of the source files into the image.
COPY . .

# https://github.com/oven-sh/bun/issues/5990#issuecomment-1738422089
RUN ~/.bun/bin/bun install

# built project
RUN ~/.bun/bin/bun run build

ENV HOST 0.0.0.0
EXPOSE 3000
# Run the application.
CMD ~/.bun/bin/bun run start

