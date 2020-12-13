app_dir = "/extended-browser-history"

worker_processes 1

working_directory app_dir

pid "#{app_dir}/tmp/pids/unicorn.pid"

listen 8080, tcp_nopush: true
timeout 30
