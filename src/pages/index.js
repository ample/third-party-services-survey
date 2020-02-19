import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  const [question, setQuestion] = useState(1)

  const [wantsCms, setWantsCms] = useState(false)
  const [contentCount, setContentCount] = useState()
  const [assetCount, setAssetCount] = useState()
  const [editorCount, setEditorCount] = useState()
  const [editorExp, setEditorExp] = useState()
  const [cmsBudget, setCmsBudget] = useState()
  const [hostWithNetlify, setHostWithNetlify] = useState()
  const [gatsbyPreview, setGatsbyPreview] = useState(false)
  const [searchSolution, setSearchSolution] = useState(null)

  const getCmsSolution = () => {
    // If no money to spend on CMS
    if (cmsBudget === "sm") {
      // If not much money, but don't care about experience
      if (editorExp === "low") return "Netlify CMS"
      // Otherwise, we have to have a conversation
    }
  }

  // ---------------------------------------- |

  const Question1 = () => (
    <>
      <p>
        Do you need to be able to edit content on the site, or would you prefer
        Ample make all edits?
      </p>

      <p>
        <button onClick={() => setQuestion(4)}>
          I would like to manage the site content
        </button>
        <button
          onClick={() => {
            setWantsCms(true)
            setQuestion(2)
          }}
        >
          I'd prefer Ample manage the content
        </button>
      </p>
    </>
  )

  const Question2 = () => (
    <>
      <p>
        About how much content do you expect to have for your site? (This
        includes pages, posts, etc.)
      </p>

      <p>
        <button
          onClick={() => {
            setContentCount("sm")
            setQuestion(3)
          }}
        >
          Less than 1,000
        </button>
        <button
          onClick={() => {
            setContentCount("md")
            setQuestion(3)
          }}
        >
          Probably a few thousand
        </button>
        <button
          onClick={() => {
            setContentCount("lg")
            setQuestion(3)
          }}
        >
          Lots and lots — more than 10,000
        </button>
      </p>
    </>
  )

  const Question3 = () => (
    <>
      <p>
        About how many assets do you expect to use on your site? This includes
        all files that aren't pages, like images, videos (not including YouTube
        or Vimeo videos), audio files, etc.
      </p>

      <p>
        <button
          onClick={() => {
            setAssetCount("sm")
            setQuestion(4)
          }}
        >
          Less than 1,000
        </button>
        <button
          onClick={() => {
            setAssetCount("md")
            setQuestion(4)
          }}
        >
          Probably a few thousand
        </button>
        <button
          onClick={() => {
            setAssetCount("lg")
            setQuestion(4)
          }}
        >
          Lots and lots — more than 10,000
        </button>
      </p>
    </>
  )

  const Question4 = () => (
    <>
      <p>How many people will be editing the content on your site?</p>

      <p>
        <button
          onClick={() => {
            setEditorCount("sm")
            setQuestion(5)
          }}
        >
          Just me
        </button>
        <button
          onClick={() => {
            setEditorCount("sm")
            setQuestion(5)
          }}
        >
          More than me, but we could share the same account
        </button>
        <button
          onClick={() => {
            setEditorCount("md")
            setQuestion(5)
          }}
        >
          A few (less than five), but we all need our own account
        </button>
        <button
          onClick={() => {
            setEditorCount("lg")
            setQuestion(5)
          }}
        >
          More than five, and we'd prefer to have our own account
        </button>
      </p>
    </>
  )

  const Question5 = () => (
    <>
      <p>How important is the editing experience for you?</p>

      <p>
        <button
          onClick={() => {
            setEditorExp("low")
            setQuestion(6)
          }}
        >
          I don't care what the CMS looks like, I just want it to work
        </button>
        <button
          onClick={() => {
            setEditorExp("high")
            setQuestion(6)
          }}
        >
          I'd like the CMS to wow me
        </button>
      </p>
    </>
  )

  const Question6 = () => (
    <>
      <p>What is your monthly budget for content management?</p>

      <p>
        <button
          onClick={() => {
            setCmsBudget("sm")
            setQuestion(7)
          }}
        >
          I have no money to spend
        </button>
        <button
          onClick={() => {
            setCmsBudget("md")
            setQuestion(7)
          }}
        >
          I'd be okay with $100 per month
        </button>
        <button
          onClick={() => {
            setCmsBudget("lg")
            setQuestion(7)
          }}
        >
          I'm willing to pay for the best that I can get
        </button>
      </p>
    </>
  )

  const Question7 = () => (
    <>
      <p>Do you have any hosting limitations?</p>

      <p>
        <button
          onClick={() => {
            setHostWithNetlify(true)
            setQuestion(8)
          }}
        >
          Nope, doesn't matter
        </button>
        <button
          onClick={() => {
            setHostWithNetlify(false)
            setQuestion(8)
          }}
        >
          We are required to host on premise
        </button>
        <button
          onClick={() => {
            setHostWithNetlify(false)
            setQuestion(8)
          }}
        >
          We have to use a specific service (or we avoid a specific service)
        </button>
      </p>
    </>
  )

  const Question8 = () => (
    <>
      <p>How important is previewing your content in real time?</p>

      <p>
        <button onClick={() => setQuestion(9)}>Gotta have it!</button>
        <button onClick={() => setQuestion(9)}>
          It would be nice, but it's not a requirement
        </button>
        <button onClick={() => setQuestion(10)}>
          Doesn't matter to us at all
        </button>
      </p>
    </>
  )

  const Question9 = () => (
    <>
      <p>What is your budget for hosting and previewing?</p>

      <p>
        <button onClick={() => setQuestion(10)}>
          We don't have any money for hosting
        </button>
        <button onClick={() => setQuestion(10)}>
          We can spend about $50 monthly
        </button>
        <button
          onClick={() => {
            setGatsbyPreview(true)
            setQuestion(10)
          }}
        >
          We can spend a few hundred monthly
        </button>
        <button
          onClick={() => {
            setGatsbyPreview(true)
            setQuestion(10)
          }}
        >
          We want the best and are willing to pay for it
        </button>
      </p>
    </>
  )

  const Question10 = () => (
    <>
      <p>Does your site require search functionality?</p>

      <p>
        <button onClick={() => setQuestion(11)}>Yes</button>
        <button onClick={() => setQuestion(12)}>No</button>
        <button onClick={() => setQuestion(11)}>Not sure</button>
      </p>
    </>
  )

  const Question11 = () => (
    <>
      <p>What is your budget for a search service?</p>

      <p>
        <button
          onClick={() => {
            setSearchSolution("jslib")
            setQuestion(12)
          }}
        >
          We don't have a budget
        </button>
        <button
          onClick={() => {
            searchSolution("tbd")
            setQuestion(12)
          }}
        >
          We can spend money, but less than $50 per month
        </button>
        <button
          onClick={() => {
            setSearchSolution("algolia")
            setQuestion(12)
          }}
        >
          We'll take the best — doesn't matter
        </button>
      </p>
    </>
  )

  const Question12 = () => (
    <>
      <h2>Results</h2>
      <p>Here is what we recommend for your site, based on your input:</p>

      <ul>
        <li>CMS: ...</li>
        <li>Hosting: ...</li>
        <li>Previewing: ...</li>
        <li>Search: ...</li>
      </ul>
    </>
  )

  const QuestionTag = eval(`Question${question}`)

  return (
    <Layout>
      <button
        onClick={() => setQuestion(1)}
        style={{ display: question > 1 ? "block" : "none" }}
      >
        Start over
      </button>
      {/* <button
        onClick={() => setQuestion(question - 1)}
        style={{ display: question > 1 ? "block" : "none" }}
      >
        Go back
      </button> */}
      <br />
      <QuestionTag />
    </Layout>
  )
}

export default IndexPage
