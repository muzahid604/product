import './App.css';

function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <h2>hello</h2>
      rm -rf .git
      git init
      git add .
      git commit -m "first commit"
      git branch -M main
      git remote add origin এইজায়গাই আপনার রিপোজিটরি এর লিংক,(যেটি ক্লোন করার জন্য নিয়েছিলেন)
      git push -u origin main -f
    </div>
  );
}

export default App;
