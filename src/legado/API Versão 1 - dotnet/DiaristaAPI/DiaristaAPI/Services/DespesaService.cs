using DiaristaAPI.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace DiaristaAPI.Services
{
    public class DespesaService
    {

        private readonly IMongoCollection<Despesa> _despesaCollection;
        public DespesaService(IOptions<DiaristaDataSettings> diaristaDataSettings)
        {
            var mongoClient = new MongoClient(
                diaristaDataSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
            diaristaDataSettings.Value.DatabaseName);

            _despesaCollection = mongoDatabase.GetCollection<Despesa>(
              diaristaDataSettings.Value.DespesaCollectionName);
        }
        public async Task<List<Despesa>> GetAsync() =>
            await _despesaCollection.Find(_ => true).ToListAsync();

        public async Task<Despesa?> GetAsync(string id) =>
            await _despesaCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Despesa newDespesa) =>
            await _despesaCollection.InsertOneAsync(newDespesa);

        public async Task UpadateAsync(string id, Despesa updatedDespesa) =>
            await _despesaCollection.ReplaceOneAsync(x => x.Id == id, updatedDespesa);

        public async Task RemoveAsync(string id) =>
            await _despesaCollection.DeleteOneAsync(x => x.Id == id);
    }
}

