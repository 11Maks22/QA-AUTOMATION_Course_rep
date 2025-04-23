FROM mcr.microsoft.com/playwright:v1.52.0-jammy
WORKDIR /tests
COPY . .
RUN npm install
CMD ["npm", "playwright", "test"]
