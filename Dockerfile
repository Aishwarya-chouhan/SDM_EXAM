FROM 172.18.0.52:5000/node
WORKDIR /nodeserver
COPY . .
CMD node index.js