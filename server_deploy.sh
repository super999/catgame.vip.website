# 1. 安装 Nginx（如果还没安装）
sudo apt update
sudo apt install nginx

# 2. 创建网站目录
sudo mkdir -p /var/www/html

# 3. 上传部署包到服务器（在本地执行）
scp deploy.tar.gz ubuntu@43.133.2.194:/tmp/

# 4. 在服务器上解压文件
sudo tar -xzf /tmp/deploy.tar.gz -C /nginx_data/nginx/html/catgame.vip

# 5. 设置权限
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# 6. 配置 Nginx
sudo cp nginx.conf /etc/nginx/sites-available/catgame.vip
sudo ln -s /etc/nginx/sites-available/catgame.vip /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # 删除默认配置

# 7. 测试 Nginx 配置
sudo nginx -t

# 8. 重启 Nginx
sudo systemctl restart nginx