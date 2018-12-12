zip -r app.zip index.js node_modules/ &&
aws lambda update-function-code \
    --function-name "isMercuryInRetrograde" \
    --zip-file "fileb://./app.zip" \
    --region "us-east-1"