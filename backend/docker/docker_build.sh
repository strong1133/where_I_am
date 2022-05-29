echo "Enter Build  Version:"
read VER

echo "NODE MODULES REMOVE"

rm -rf ../node_modules
rm ../package-lock.json

echo ":::: DOCER BUILD START / ${VER} ::::"
# # 
# sudo docker build -t docker.strongsub.com/strong_wiam_back:v_${VER}  .
docker buildx build --platform linux/arm/v7 -t docker.strongsub.com/strong_wiam_back:v_${VER} --push .

echo ":::: DOCER BUILD  END  ::::"