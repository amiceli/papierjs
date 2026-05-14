# Run stencil in tmux session
stencil:
    tmux new-session -d -s "papier-stencil"
    tmux send-keys -t "papier-stencil" "npm run build:watch" ENTER

# Watch components to reload histoire stories
watch_changes:
  npx nodemon --exec "npx histoire dev" src/components/**/*.tsx

# Run histoire in a tmux session
histoire:
    tmux new-session -d -s "papier-histoire"
    tmux send-keys -t "papier-histoire" "just watch_changes" ENTER
    open 'http://localhost:6006/'

# Run bith stencil and histoire
start:
  just stencil
  just histoire

# Build stencil
build:
    npm run build

# Lint code with biome
biome:
  npx biome check --write --diagnostic-level='error'

# Create a new stencil component
create component:
    npx stencil g {{component}}
    mkdir src/components/{{component}}/stories
    touch src/components/{{component}}/stories/{{component}}.story.vue
    touch src/components/{{component}}/stories/{{component}}.specs.story.vue

# Run unit tests
test:
    npm run test
