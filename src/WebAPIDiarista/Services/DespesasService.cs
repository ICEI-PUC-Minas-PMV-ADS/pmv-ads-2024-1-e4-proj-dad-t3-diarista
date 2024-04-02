using WebAPIDiarista.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace WebAPIDiarista.Services
{
    public class DespesasService
    {
        private readonly IMongoCollection<Despesa> _despesasCollection;

        public DespesasService(
            IOptions<DBDiaristaDataBaseSettings> dBDiaristaDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                dBDiaristaDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                dBDiaristaDataBaseSettings.Value.DatabaseName);
            _despesasCollection = mongoDatabase.GetCollection<Despesa>(
                dBDiaristaDataBaseSettings.Value.DespesasCollectionName);
        }

        public async Task<List<Despesa>> GetAsync() =>
            await _despesasCollection.Find(_ => true).ToListAsync();
        public async Task<Despesa> GetAsync(string id) =>
            await _despesasCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Despesa newDespesa) =>
            await _despesasCollection.InsertOneAsync(newDespesa);
        public async Task UpdateAsync(string id, Despesa updatedDespesa) =>
            await _despesasCollection.ReplaceOneAsync(x => x.Id == id, updatedDespesa);
        public async Task RemoveAsync(string id) =>
            await _despesasCollection.DeleteOneAsync(x => x.Id == id);
    }
}
