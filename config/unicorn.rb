app_dir = "/extended-browser-history"

worker_processes 1

working_directory app_dir

pid "#{app_dir}/tmp/pids/unicorn.pid"
stderr_path "#{@app_dir}/log/unicorn.stderr.log"
stdout_path "#{@app_dir}/log/unicorn.stdout.log"

listen 8080, tcp_nopush: true
timeout 30
