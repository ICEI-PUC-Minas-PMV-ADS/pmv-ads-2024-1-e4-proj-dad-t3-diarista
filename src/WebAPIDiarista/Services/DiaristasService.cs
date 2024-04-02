using WebAPIDiarista.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace WebAPIDiarista.Services
{
    public class DiaristasService
    {
        private readonly IMongoCollection<Diarista> _diaristasCollection;

        public DiaristasService(
            IOptions<DBDiaristaDataBaseSettings> dBDiaristaDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                dBDiaristaDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                dBDiaristaDataBaseSettings.Value.DatabaseName);
            _diaristasCollection = mongoDatabase.GetCollection<Diarista>(
                dBDiaristaDataBaseSettings.Value.DiaristasCollectionName);
        }

        public async Task<List<Diarista>> GetAsync() =>
            await _diaristasCollection.Find(_ => true).ToListAsync();
        public async Task<Diarista> GetAsync(string id) =>
            await _diaristasCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Diarista newDiarista) =>
            await _diaristasCollection.InsertOneAsync(newDiarista);
        public async Task UpdateAsync(string id, Diarista updatedDiarista) =>
            await _diaristasCollection.ReplaceOneAsync(x => x.Id == id, updatedDiarista);
        public async Task RemoveAsync(string id) =>
            await _diaristasCollection.DeleteOneAsync(x => x.Id == id);
    }
}
