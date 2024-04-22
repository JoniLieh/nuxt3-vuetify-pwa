echo "Running Docker Cleanup..."

docker compose down
docker image rm frontend

echo "Cleanup DONE"