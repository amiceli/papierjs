stencil:
    tmux new-session -d -s "papier-stencil"
    tmux send-keys -t "papier-stencil" "npm run start" ENTER

histoire:
    tmux new-session -d -s "papier-histoire"
    tmux send-keys -t "papier-histoire" "npx histoire dev" ENTER
    open 'http://localhost:6006/'

build:
    npm run build

biome:
  npx biome check --write

create component:
    npx stencil g {{component}}
