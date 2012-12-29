require 'rack'
use Rack::Deflater
use Rack::Static, :urls => ["", "js/", "css/"], :root => "./public", :index => "index.html"
run lambda {|e|}
