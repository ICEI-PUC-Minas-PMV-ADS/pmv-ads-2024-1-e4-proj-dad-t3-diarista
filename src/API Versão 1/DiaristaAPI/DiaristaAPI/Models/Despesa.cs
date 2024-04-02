using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace DiaristaAPI.Models
{
    public class Despesa
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Natureza")]
        public string Natureza { get; set; } = null!;

        [BsonElement("Valor")]
        public decimal Valor { get; set; }

        [BsonElement("Data")]
        public DateTime Data { get; set; }
    }
}
