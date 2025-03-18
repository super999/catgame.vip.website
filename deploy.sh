#!/bin/bash

# 构建项目
echo "Building project..."
npm run build

# 创建部署包
echo "Creating deployment package..."
cd out && tar -czf ../deploy.tar.gz . && cd ..

echo "Deployment package created: deploy.tar.gz"
echo "Please upload this file to your server and extract it to your web directory" 