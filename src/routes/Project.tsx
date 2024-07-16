import Projects from "../components/Projects";

const Project = () => {
    return (
        <>
            <div className="d-flex flex-column fade-in justify-content-center all-projects p-4 gap-4">
                <div className="general-info">
                    <h1 className="text-start fw-bold">Projects</h1>
                    <p className="fs-5 text-white-50">I invite you to explore some of my personal programming projects. They reflect my daily dedication and effort to improve my skills. I'm excited to apply what I've learned to future projects. Join me on this journey of growth and discovery!
                    </p>
                </div>
                <div className="general">
                    <Projects />
                </div>
            </div>
        </>
    );
};

export default Project;