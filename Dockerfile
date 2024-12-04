# שלב 1: בנייה
FROM node:18 AS builder
WORKDIR /app

# התקנת התלויות
COPY package*.json ./
RUN npm install

# העתקת כל הקבצים ובנייה
COPY . .
RUN npm run build

# שלב 2: הפצה
FROM nginx:stable-alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
