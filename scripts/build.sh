#!/bin/bash
TAG="$1"
docker build ../. -t neofelis-server:${TAG}