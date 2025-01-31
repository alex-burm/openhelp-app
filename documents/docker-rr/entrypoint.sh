#!/bin/sh
set -e

grep -q "Baldinof\\\\RoadRunnerBundle\\\\BaldinofRoadRunnerBundle" config/bundles.php || \
    sed -i "/return \[/a \ \ \ \ Baldinof\\\\RoadRunnerBundle\\\\BaldinofRoadRunnerBundle::class => ['all' => true]," config/bundles.php

composer require baldinof/roadrunner-bundle
composer require spiral/roadrunner-cli --dev


rr serve -c /docker-entrypoint.d/rr.yaml
#sleep 1000
#exec "$@"
