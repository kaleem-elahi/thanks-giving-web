npm run build
cd build/ && aws s3 sync . s3://yap-thanksgiving/
aws cloudfront create-invalidation --distribution-id E28HLM9F3TUT5X --paths /\*
