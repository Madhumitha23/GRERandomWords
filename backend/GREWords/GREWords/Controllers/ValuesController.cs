using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;



namespace GREWords.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values        
        //public async Task<string> Get()
        //[OutputCache(Duration=1000,VaryByParam="none")]        
        public IEnumerable<WORD> Get()
        {
            try
            {
                int n = StaticRandom.Instance.Next(1, 978);

                List<WORD> lstWord = new List<WORD>();
                    using (WordsDBEntities objEntries = new WordsDBEntities())
                    {
                        //words = objEntries.RandomWords.FirstOrDefault(e => e.id == i);
                        var newword = objEntries.WORDS.FirstOrDefault(e => e.ID == n).WORD1;
                         var wordlist = from x in objEntries.WORDS
                                     where x.WORD1 == newword
                                     select x;

                         lstWord = wordlist.ToList(); 

                    }
                #region commentedtext
                /*string word = words.words;
                HttpClient client = new HttpClient();

                HttpResponseMessage response = await client.GetAsync("http://googledictionaryapi.eu-gb.mybluemix.net/?define=" + word);



                string data = await response.Content.ReadAsStringAsync();


                var obj = JsonConvert.DeserializeObject<JArray>(data).ToObject<List<JObject>>().FirstOrDefault();
                //string strword = obj["word"].ToString();

                JObject jObject = JObject.Parse(obj["meaning"].ToString());
                string strWordtype = null;
                WORD objwords;
                //List<Words> lstWords = new List<Words>();
                foreach (JProperty prop in jObject.Properties())
                {
                    strWordtype = prop.Name;
                    objwords = new WORD();

                    objwords.WORD1 = word;
                    objwords.WORDTYPE = strWordtype;
                    if (obj["meaning"][strWordtype].Children()["definition"].ToList().Count > 0)
                    {

                        objwords.MEANING = obj["meaning"][strWordtype].Children()["definition"].ToList()[0].ToString();
                    }

                    if (obj["meaning"][strWordtype].Children()["example"].ToList().Count > 0)
                    {

                        objwords.EXAMPLE = obj["meaning"][strWordtype].Children()["example"].ToList()[0].ToString();
                    }

                    using (WordsEntities objEntities = new WordsEntities())
                    {
                        objEntities.WORDS.Add(objwords);
                        objEntities.SaveChanges();
                    };



                }

*/
                #endregion
                
                //Console.Write("Current time " + DateTime.Now.ToString());
                return lstWord;

            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
