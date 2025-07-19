stencil:
    tmux new-session -d -s "papier-stencil"
    tmux send-keys -t "papier-stencil" "npm run build:watch" ENTER

storybook:
    tmux new-session -d -s "papier-storybook"
    tmux send-keys -t "papier-storybook" "npm run storybook" ENTER

run:
    just stencil
    just storybook
    open 'http://localhost:6006/'

build:
    npm run build
