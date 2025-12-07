#!/bin/bash

pnpm dlx concurrently -n "Server,Model,UI" 
-c "yellow,blue,green" 
"pnpm --filter @seeds/server run dev" 
"pnpm --filter @seeds/models run dev" 
"pnpm --filter @seeds/ui run dev"