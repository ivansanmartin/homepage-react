import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Blogs = () => {
    interface Blog {
        id: string;
        name: string;
        img: string;
        description: string;
        url: string;
        created_at: string;
        button: string;
        last: boolean;

    }

    const [blog] = useState<Blog[]>([
        {
            id: uuidv4(),
            name: "Docker - First Steps",
            img: "https://res.cloudinary.com/dxupqwg5l/image/upload/v1708695429/ivansanmartin.github.io/rboo0hymusg4q6skh0be.png",
            description:
                "First steps with Docker, creating containers, volumes, networks, and testing our application with Postman and MongoDB.",
            url: "https://ivans-web.vercel.app/blog/firsts-steps-docker",
            created_at: "12-02-2024",
            button: "Not Available",
            last: false
        },
        {
            id: uuidv4(),
            name: "Docker Compose & Dockerfile",
            img: "https://res.cloudinary.com/dxupqwg5l/image/upload/v1708540288/docker-compose/evbpvkp81oelvzkjfqvv.jpg",
            description:
                "Creating our own images and defining multi-container applications with Docker Compose.",
            url: "https://ivans-web.vercel.app/blog/docker-compose-and-dockerfile",
            created_at: "27-02-2024",
            button: "Not Available",
            last: false
        },
    ])

  return (
    <>
        {
            blog.map((blo) => (
            <div className="card card-1" key={blo.id}>        
                <div className="body-card text-wrap text-break p-1">
                    <div>
                        <h2 className="fw-semibold mb-4">{blo.name}</h2>
                        <p>{blo.description}</p>
                        <div>
                            <img src={blo.img} alt="" />
                        </div>
                    </div>
                    
                    <div className="img-reference">
                        <p className=" mt-3 text-secondary fst-italic">Publish date: <span className="text-decoration-underline">{blo.created_at}</span></p>
                    </div>
                    <a className="btn-main text-center w-50 mt-3" onClick={() => alert('TECHNIQUE PAUSE')}>{blo.button}</a>
                </div>
            </div>
            ))
        }

    </>
  )
};

export default Blogs;