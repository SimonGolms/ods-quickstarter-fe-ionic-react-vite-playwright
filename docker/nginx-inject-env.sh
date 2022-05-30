#!/usr/bin/env sh
set -e

ENV_PREFIX=REACT_APP_
INJECT_FILE_PATH="/usr/share/nginx/html/inject.js"

# Using environment variables in nginx configuration
# See: https://github.com/docker-library/docs/tree/master/nginx#using-environment-variables-in-nginx-configuration-new-in-119
envsubst '${REACT_APP_API_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf

# Update environment variables to use nginx api gateway
REACT_APP_API_URL="/api"

echo "window.injectedEnv = {" > "${INJECT_FILE_PATH}"

for envrow in $(printenv); do
  case $envrow in
    $ENV_PREFIX*) echo $envrow | awk -F'=' '{printf "  %s: \"%s\",\n", $1, $2 }' >> "${INJECT_FILE_PATH}" ;;
  esac
done

echo "};" >> "${INJECT_FILE_PATH}"
