#head -n 10 dataset/business.json

#head -n 1000 dataset/business.json | jq -s '.' > user.json

#stream json files to standard json
declare -a arr=("business" "checkin" "photos" "review" "tip" "user")

for i in "${arr[@]}"
do 
	echo "$i"
	cat ./dataset/$i.json | jq -s '.' > ./standardJson/$i.json
done
