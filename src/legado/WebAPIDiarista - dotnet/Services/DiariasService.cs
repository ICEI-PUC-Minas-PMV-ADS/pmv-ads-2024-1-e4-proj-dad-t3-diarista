using WebAPIDiarista.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace WebAPIDiarista.Services
{
    public class DiariasService
    {
        private readonly IMongoCollection<Diaria> _diariasCollection;

        public DiariasService(
            IOptions<DBDiaristaDataBaseSettings> dBDiaristaDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                dBDiaristaDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                dBDiaristaDataBaseSettings.Value.DatabaseName);
            _diariasCollection = mongoDatabase.GetCollection<Diaria>(
                dBDiaristaDataBaseSettings.Value.DiariasCollectionName);
        }

        public async Task<List<Diaria>> GetAsync() =>
            await _diariasCollection.Find(_ => true).ToListAsync();
        public async Task<Diaria> GetAsync(string id) =>
            await _diariasCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Diaria newDiaria) =>
            await _diariasCollection.InsertOneAsync(newDiaria);
        public async Task UpdateAsync(string id, Diaria updatedDiaria) =>
            await _diariasCollection.ReplaceOneAsync(x => x.Id == id, updatedDiaria);
        public async Task RemoveAsync(string id) =>
            await _diariasCollection.DeleteOneAsync(x => x.Id == id);
        
    }
}
