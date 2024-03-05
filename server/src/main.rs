use actix_cors::Cors;
use actix_web::{App, post, HttpResponse, HttpServer, Responder};
use actix_files as fs;


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
