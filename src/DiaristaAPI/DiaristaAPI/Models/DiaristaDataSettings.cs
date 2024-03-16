namespace DiaristaAPI.Models
{
    public class DiaristaDataSettings
    {
        // OBS: Aqui está armazenando as informações de conexão do arquivo appsettings.json
        // Portanto, os nomes serão identicos ao JSON

        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string DiaristaCollectionName { get; set; }
        public string ClientesCollectionName { get; set; }
        public string DespesaCollectionName { get; set; }
    }
}
