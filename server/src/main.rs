use actix_cors::Cors;
use actix_web::{web, App, post, HttpResponse, HttpServer, Responder};
use actix_files as fs;

async fn index() -> impl Responder {
    let html = r#"<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="/images/trinket1.png" />
    <meta property="og:image" content="/images/trinket2.png" />
    <meta property="og:title" content="React App" />
    <title>Trinket Frame</title>
</head>
<body>
    <h1>Welcome to the Frame</h1>
</body>
</html>"#;

    HttpResponse::Ok().content_type("text/html").body(html)
}

#[post("/api/interaction")]
async fn handle_interaction() -> impl Responder {
    HttpResponse::Ok()
        .content_type("application/json")
        .body(r#"{"message": "New Frame HTML"}"#)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header()
            .supports_credentials();

        App::new()
            .wrap(cors)
            .service(handle_interaction)
            .service(fs::Files::new("/", "./../client/build").index_file("index.html"))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
