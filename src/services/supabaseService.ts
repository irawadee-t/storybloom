import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const saveChatInteraction = async (
  segmentId: number,
  question: string,
  answer: string,
  followUpQuestions: string[]
) => {
    try {
        await supabase.from("chat_history").insert([
            {
              segment_id: segmentId,
              question,
              answer,
              follow_up_questions: followUpQuestions,
            },
          ]);
    } catch (error) {
        console.error('Error while waiting for data:', error);
    }
//   const { data, error } = await supabase.from("chat_history").insert([
//     {
//       segment_id: segmentId,
//       question,
//       answer,
//       follow_up_questions: followUpQuestions,
//     },
//   ]);
//   if (error) throw new Error(`Error saving chat interaction: ${error.message}`);
//   return data;
};

// const storeUserData  = async () => {    
//     // Once all promises are resolved, insert the data into the Supabase database
//     try {
//         // const { data: userData, error } = await supabase
//         await supabase
//             .from('users')
//             .insert([{
//                 tiktok_username: props.username,
//                 city: form.city,
//                 adjectives: props.adjs,
//                 tiktok_hashtags: props.hashtags,
//                 itinerary: results,
//                 tiktok_video_urls: urls
//             }]);

//         // if (error) {
//         //     console.error('Error storing user data:', error);
//         // } else {
//         //     console.log('User data stored:', userData);
//         // }
//         setEnteredData(true);
//     } catch (error) {

//         // console.error('Error while waiting for data:', error);
//     }
// };
// storeUserData();

// FETCH CHAT HISTORY LATER
// export const fetchChatHistoryByUser = async (userId: string) => {
//     const { data, error } = await supabase
//       .from("chat_interactions")
//       .select("*")
//       .eq("user_id", userId)
//       .order("segment_id", { ascending: true })
//       .order("created_at", { ascending: true });
//     if (error) throw new Error(`Error fetching chat history: ${error.message}`);
//     return data;
//   };
