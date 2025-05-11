# Use Debian-based Node image for working file watchers
FROM node:18

# Set working directory
WORKDIR /app

# Install Git
RUN apt-get update && apt-get install -y git

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start in dev mode (with hot reload)
CMD ["npm", "run", "dev"]
