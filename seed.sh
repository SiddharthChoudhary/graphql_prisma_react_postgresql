#!/bin/sh
# node seed.js if required then uncomment this line
npx prisma migrate dev --name init --preview-feature
npx prisma introspect
prisma generate

