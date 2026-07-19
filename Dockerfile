# Stage 1: Build the static files using Node 22
FROM node:22-alpine AS builder
WORKDIR /app

# Corepack is bundled with Node 22; enabling it is the fastest way to get pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files first to leverage Docker layer caching
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Run the build script
RUN pnpm run build

# Stage 2: Serve the files using Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

RUN find /usr/share/nginx/html -type d -exec chmod 755 {} + && \
    find /usr/share/nginx/html -type f -exec chmod 644 {} +

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]