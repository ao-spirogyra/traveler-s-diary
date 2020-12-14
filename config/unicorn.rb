app_dir = "/extended-browser-history"

worker_processes 1

working_directory app_dir

pid "#{app_dir}/tmp/pids/unicorn.pid"

listen "#{app_dir}/tmp/sockets/unicorn.sock"
timeout 30


stdout_path "#{app_dir}/log/unicorn.stdout.log"
