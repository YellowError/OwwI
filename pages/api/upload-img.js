import formidable from "formidable";

export const config = {
    api: {
        bodyParser: false
    }
};

export default (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "public/images";
    form.keepExtensions = true;
    form.parse(req, (err, _, files) => {
        if (err) {
            res.json({ status: false, message: "No files" });
            return;
        }
        const name = files.picture.path;
        const newName = name.replace("public", "");
        res.json({
            status: true,
            name: newName,
            message: "picture is uploaded"
        });
    });
};