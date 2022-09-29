import "./Post.css";
import store from "store-js";
import PostboxHeader from "../../components/PostboxHeader/PostboxHeader";
import { useLocation } from "react-router-dom";

const Post = () => {
  const answerList = store.get("answer");
  const location = useLocation();
  const loca = location.state.num;

  return (
    <div>
      <PostboxHeader />
      <main className="box">
        {answerList.map((v, i) => {
          const key = `post${i}`;
          return (
            <section key={key}>
              <p>{v.date}</p>
              <div className="answerbox">
                <div className="q_question">
                  <img src={`${process.env.PUBLIC_URL}Assets/q.png`} />
                  <div className="questionbox">{v.question}</div>
                </div>
                <div className="subanswerbox">{v.answer}</div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Post;
