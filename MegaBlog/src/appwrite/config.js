import { Service } from "appwrite/types/service";
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featureImg, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title, content, featureImg, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: ERROR", error);
        }
    }

    async updatePost(slug, { title, content, featureImg, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    featureImg,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: ERROR", error);
        }
    }

    async deletePost(slug, { title, content, featureImg, status }) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteDatabaseId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: ERROR", error);
            return false
        }
    }

    async getPost(slug, { title, content, featureImg, status }) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteDatabaseId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: ERROR", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteDatabaseId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: ERROR", error);
            return false
        }
    }


    // file upload services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: ERROR", error);
            return false
        }
    }
    // file delete services
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                ID.unique(),
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: ERROR", error);
            return false
        }
    }

    // file Preview services
    async getFilePreview(fileId) {

        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )

    }

}

const service = new Service();
export default service;