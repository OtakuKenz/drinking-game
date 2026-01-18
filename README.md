# DrinkingGame

Project developed using Angular 21 and is also using Material.

## Overview

Main goal of this is project is to compile different drinking games we can play.

## Strucure

Current struture:

- For features

  - features/(name of the feature)

  - features/(name of the feature)/pages - page for that feature

  - features/(name of the feature)/components - components for that feature

  - features/(name of the feature)/constants - constants for that feature

    - This will contain all constants used for the feature, including the prompts, questions, and so on.

  - features/(name of the feature)/components - components for that feature

- App constants

  - constants/game.constant.ts
  
      - This will contain the list of games available. Content will be rendered in game-selection screen.

      - Ensure that the link matches with the routing inside `app.routes.ts`

## Repo Rule

`main` branch is protected to prevent accidental changes. Changes should be done via PR to `main`. 

GitHub Actions also set to build and run tests during PR to protect `main` branch.