# Makefile for Git commands

# Variables
BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
REMOTE := origin

# Default target
all: status

# Show Git status
status:
	@echo "Git status:"
	@git status

# Add all changes to staging
add:
	@echo "Adding all changes to staging..."
	@git add .

# Commit changes with a message
commit:
	@echo "Committing changes..."
	@git commit -m "$(message)"

# Push changes to the remote repository
push:
	@echo "Pushing changes to $(REMOTE)/$(BRANCH)..."
	@git push $(REMOTE) $(BRANCH)

# Pull changes from the remote repository
pull:
	@echo "Pulling changes from $(REMOTE)/$(BRANCH)..."
	@git pull $(REMOTE) $(BRANCH)

# Create and switch to a new branch
new-branch:
	@echo "Creating and switching to new branch: $(branch)"
	@git checkout -b $(branch)

# Switch to an existing branch
switch-branch:
	@echo "Switching to branch: $(branch)"
	@git checkout $(branch)

# List all branches
branches:
	@echo "Listing all branches:"
	@git branch -a

# Show Git log
log:
	@echo "Git log:"
	@git log --oneline

# Show the current branch
current-branch:
	@echo "Current branch: $(BRANCH)"

# Clean untracked files
clean:
	@echo "Cleaning untracked files..."
	@git clean -fd

# Reset the repository to the last commit
reset:
	@echo "Resetting repository to the last commit..."
	@git reset --hard

# Help: List all available commands
help:
	@echo "Available commands:"
	@echo "  make status         - Show Git status"
	@echo "  make add            - Add all changes to staging"
	@echo "  make commit message='Your commit message' - Commit changes"
	@echo "  make push           - Push changes to the remote repository"
	@echo "  make pull           - Pull changes from the remote repository"
	@echo "  make new-branch branch='new-branch-name' - Create and switch to a new branch"
	@echo "  make switch-branch branch='branch-name' - Switch to an existing branch"
	@echo "  make branches       - List all branches"
	@echo "  make log            - Show Git log"
	@echo "  make current-branch - Show the current branch"
	@echo "  make clean          - Clean untracked files"
	@echo "  make reset          - Reset the repository to the last commit"
	@echo "  make help           - Show this help message"

.PHONY: all status add commit push pull new-branch switch-branch branches log current-branch clean reset help