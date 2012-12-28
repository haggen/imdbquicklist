use Rack::Static, 
  :urls => ["/js", "/css"],
  :root => "public"

response = lambda do |env|
  [200, {'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=86400'},
  File.open('public/index.html', File::RDONLY)]
end

run response
