FROM 172.18.0.52:5000/node
WORKDIR /nodeserver
EXPOSE 9999
COPY . .
CMD node index.js