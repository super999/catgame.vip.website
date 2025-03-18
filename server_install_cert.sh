# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取并安装 SSL 证书
sudo certbot --nginx -d catgame.vip -d www.catgame.vip