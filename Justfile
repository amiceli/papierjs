stencil:
    tmux new-session -d -s "papier-stencil"
    tmux send-keys -t "papier-stencil" "npm run build:watch" ENTER

watch_changes:
  npx nodemon --exec "npx histoire dev" src/components/**/*.tsx

histoire:
    tmux new-session -d -s "papier-histoire"
    tmux send-keys -t "papier-histoire" "just watch_changes" ENTER
    open 'http://localhost:6006/'

start:
  just stencil
  just histoire

build:
    npm run build

biome:
  npx biome check --write --diagnostic-level='error'

create component:
    npx stencil g {{component}}
    mkdir src/components/{{component}}/stories
    touch src/components/{{component}}/stories/{{component}}.story.vue
    touch src/components/{{component}}/stories/{{component}}.specs.story.vue
