﻿using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace WebAPIDiarista.Models
{
    public class Usuario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("_id")]
        public string Id { get; set; }
        [BsonElement("diarista")]
        public string Diarista { get; set; }
        [BsonElement("login")]
        public string Login { get; set; }
        [BsonElement("senha")]
        public string Senha { get; set; }
    }
}
